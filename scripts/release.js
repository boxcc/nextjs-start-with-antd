const shelljs = require('shelljs');
const inquirer = require('inquirer');
const semver = require('semver');
const pkg = require('../package.json');
// 1
// 判定git命令是否可用
if (!shelljs.which('git')) {
  // 向命令行打印git命令不可用的提示信息
  shelljs.echo('Sorry, this script requires git');
  // 退出当前进程
  shelljs.exit(1);
}

async function main() {
  // const { versionType } = await inquirer.prompt([
  //   {
  //     type: 'list',
  //     name: 'versionType',
  //     message: '请选择修订版本类型：',
  //     default: true,
  //     choices: [
  //       { name: '正式版本', value: 'official' },
  //       { name: '测试版本', value: 'preview' },
  //     ],
  //   },
  // ]);

  const { inputVersion } = await inquirer.prompt([
    {
      type: 'list',
      name: 'inputVersion',
      message: '请选择修订版本: ',
      default: true,
      choices: [
        { value: 'major', name: '主版本号' },
        { value: 'minor', name: '次版本号' },
        { value: 'patch', name: '补丁号' },
      ],
    },
  ]);

  const newVersion = semver.inc(pkg.version, inputVersion);

  shelljs.exec(`git flow release start 'v${newVersion}'`);

  shelljs.exec(`yarn release -- --release-as ${inputVersion} --skip.tag`);

  shelljs.exec(
    `git flow release finish -m "chore(release): v${newVersion}" -p 'v${newVersion}'`,
  );

  shelljs.exit();
}

try {
  main();
} catch (error) {
  console.error(error);
  shelljs.exit();
}
