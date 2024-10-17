#!/usr/bin/env bash
#依赖安装
#0 8 5 5 * jd_indeps.sh
#new Env('依赖安装');
#updatedate:20240903
#

DIR="$( pwd )"
dir_root=/ql
dir_repo=$dir_root/repo
dir_deps=$dir_root/deps

if [[ $AUTOCFG == 'true' ]];then
    if [[ -z "$(echo "$DIR"|grep 'main')" ]];then
        dir_code=$dir_log/6dylan6_jdpro_jd_sharecode
        repo='6dylan6_jdpro'
    else
        dir_code=$dir_log/6dylan6_jdpro_main_jd_sharecode
        repo='6dylan6_jdpro_main'
    fi
    [[ -d $dir_root/data ]] && dir_data=$dir_root/data
    [[ -d $dir_data/repo ]] && dir_repo=$dir_data/repo
    [[ -d $dir_data/deps ]] && dir_deps=$dir_data/deps
    cp $dir_repo/${repo}/sendNotify.js $dir_deps/ > /dev/null 2>&1
    echo -e "\n已配置sendNotify.js文件到deps目录下，再次执行订阅生效\n"
else
    echo -e "\n如需自动配置sendNotify.js文件到desp目录下，请配置变量AUTOCFG='true'\n"
fi

npm_ver=`pnpm -v|awk -F. '{print $1}'`
if [[ $npm_ver -ge 7 ]];then
    export PNPM_HOME="/root/.local/share/pnpm"
    export PATH="$PNPM_HOME:$PATH"
fi

echo -e "安装本库所需依赖，不一定一次全部安装成功，完成请检查\n"
echo -e "开始安装............\n"

# 安装 Node.js 依赖
pnpm config set registry https://registry.npmmirror.com
pnpm install -g
pnpm i -g moment@2.30.1
pnpm i -g axios@1.7.4
pnpm i -g cheerio@1.0.0
pnpm i -g md5@2.3.0
pnpm i -g request@2.88.2
pnpm i -g node-rsa@1.1.1
pnpm i -g crypto-js@4.2.0

# 安装 Python 依赖
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple/ pycryptodome
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple/ bs4
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple/ PyExecJS
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple/ requests

echo -e "\n所需依赖安装完成，请检查有没有报错，可尝试再次运行"