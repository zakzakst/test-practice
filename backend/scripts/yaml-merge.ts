import fs from 'node:fs';
import yaml from 'js-yaml';
import merge from 'lodash.merge';

const loadYaml = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  return yaml.load(content);
};

const posts = loadYaml('openapi/posts.yaml');

const merged = merge({}, posts);
merged.info = merged.info || {};
merged.info.title = 'アプリ API';
merged.info.version = '1.0.0';

fs.writeFileSync('openapi/_bundle.yaml', yaml.dump(merged), 'utf8');
console.log('_bundle.yamlを生成しました');
