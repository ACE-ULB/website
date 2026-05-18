/**
 * Migration script: converts all comite.md files from the legacy
 * named-object format to the new `membres: []` list format.
 *
 * Usage: node utils/migrate-comite.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import jsYaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COMITE_DIR = path.join(ROOT, 'src/assets/comite');
const PUBLIC_COMITE = path.join(ROOT, 'public/static/img/comite');

// Fields that are metadata, not member entries
const META_FIELDS = new Set(['year', 'bodyContent', 'bodyHtml', 'dir', 'base', 'ext', 'sourceBase', 'sourceExt']);

// Detect "Coopté·e [poste]" patterns and return {poste, coopte}
function normalizePoste(rawPoste) {
  if (!rawPoste) return { poste: '', coopte: false };
  const str = rawPoste.trim();
  // "Coopté·e [poste]" or "Cooptée [poste]" or "Coopté [poste]" at the start
  const coopteMatch = str.match(/^Coopt[eé]e?\s+(.+)$/i);
  if (coopteMatch) {
    return { poste: coopteMatch[1].trim(), coopte: true };
  }
  return { poste: str, coopte: false };
}

// Returns the public img path if the photo exists, else ""
function resolveImg(year, fieldName) {
  const yearDir = path.join(PUBLIC_COMITE, String(year));
  if (!fs.existsSync(yearDir)) return '';
  // Try exact field name
  const exact = path.join(yearDir, `${fieldName}.png`);
  if (fs.existsSync(exact)) return `/static/img/comite/${year}/${fieldName}.png`;
  return '';
}

function migrateFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');

  // Extract YAML frontmatter between --- delimiters
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    console.log(`  Skipping (no frontmatter): ${filePath}`);
    return;
  }

  let data;
  try {
    data = jsYaml.load(fmMatch[1]);
  } catch (e) {
    console.log(`  Skipping (YAML parse error): ${filePath} — ${e.message}`);
    return;
  }

  if (!data || !data.year) {
    console.log(`  Skipping (no year): ${filePath}`);
    return;
  }

  // Already migrated?
  if (Array.isArray(data.membres)) {
    console.log(`  Already migrated: ${filePath}`);
    return;
  }

  const year = data.year;
  const membres = [];

  for (const [key, val] of Object.entries(data)) {
    if (META_FIELDS.has(key)) continue;
    if (!val || typeof val !== 'object') continue;
    const nom = (val.nom || '').trim();
    if (!nom) continue; // skip empty entries

    const rawPoste = val.poste || '';
    const { poste, coopte } = normalizePoste(rawPoste);

    const cercle = (val.cercle || '').trim();
    const dem = val.dem === true;

    // Resolve photo path
    let img = '';
    // If img was already a non-empty string path (uploaded via CMS), keep it
    if (typeof val.img === 'string' && val.img.length > 0 && val.img !== 'legacy') {
      img = val.img;
    } else {
      // Try to find legacy photo by field name
      img = resolveImg(year, key);
    }

    const membre = { nom, poste, cercle, img, dem, coopte };
    // Clean up empty/false defaults to keep YAML lean
    if (!cercle) delete membre.cercle;
    if (!dem) delete membre.dem;
    if (!coopte) delete membre.coopte;
    if (!img) delete membre.img;

    membres.push(membre);
  }

  // Build new frontmatter
  const newData = { year, membres };
  const newFm = jsYaml.dump(newData, {
    indent: 2,
    lineWidth: -1,
    quotingType: '"',
    forceQuotes: false,
  });

  // Reconstruct file (preserve body content after ---)
  const bodyMatch = raw.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
  const body = bodyMatch ? bodyMatch[1] : '';
  const newContent = `---\n${newFm}---\n${body}`;

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`  Migrated ${year}: ${membres.length} membres`);
}

// Walk all year directories
const entries = fs.readdirSync(COMITE_DIR, { withFileTypes: true });
for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const comitePath = path.join(COMITE_DIR, entry.name, 'comite.md');
  if (fs.existsSync(comitePath)) {
    migrateFile(comitePath);
  }
}

console.log('\nMigration complete.');
