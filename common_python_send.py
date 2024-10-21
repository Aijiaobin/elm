import subprocess

def call_js_function(function_name, param1, param2):
    try:
        # 调用 Node.js 文件并传递函数名和参数
        result = subprocess.run(
            ['node', './common2.js', function_name, param1, param2],  # 指定要调用的函数和参数
            capture_output=True,  # 捕获输出
            text=True,  # 将输出作为字符串处理
            check=True  # 如果有错误，则抛出异常
        )

        # 打印 JS 脚本的标准输出和标准错误
        print("JS function output (stdout):", result.stdout)
        print("JS function output (stderr):", result.stderr)
    except subprocess.CalledProcessError as e:
        print("Error while calling JS function:", e.stderr)
#
# # 调用 couponNotify 函数，传入参数 "param1_value", "param2_value"
# call_js_function("couponNotify", "param1_value", "param2_value")
#
# # 调用 anotherFunction 函数，传入参数 "param1_value", "param2_value"
# call_js_function("anotherFunction", "param1_value", "param2_value")
