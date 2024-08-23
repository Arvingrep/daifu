#!/bin/bash

# 生成 MD5 签名的函数
generate_md5_signature() {
    local params="$1"
    local key="$2"
    local sign_string="${params}&key=${key}"
    # macOS 使用 md5 命令计算 MD5
    echo -n "${sign_string}" | md5 -q
}

# 请求的 URL
api_url="http://test-pay.com/api/gateway/query"

# 请求参数（根据实际接口要求填写）
mch_id="10020"                # 商户编号
out_trade_no="1212"           # 商户订单号

# 商户秘钥
secret_key="8db5ef5a-dce6-425c-b8f2-73bc65e15dc2"

# 拼接参数并按 ASCII 码排序
params="mch_id=${mch_id}&out_trade_no=${out_trade_no}"

# 按字段名的 ASCII 码排序并拼接
sorted_params=$(echo "${params}" | tr '&' '\n' | sort | tr '\n' '&' | sed 's/&$//')

# 打印用于生成签名的字符串
echo "Sign String: ${sorted_params}&key=${secret_key}"

# 生成签名
signature=$(generate_md5_signature "$sorted_params" "$secret_key")

# 打印生成的签名
echo "Generated Signature: ${signature}"

# 发送 POST 请求
response=$(curl -X POST "${api_url}" -d "${params}&sign=${signature}" -H "Content-Type: application/x-www-form-urlencoded")

# 打印响应
echo "Response: ${response}"
