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
api_url="https://fen.lianzhouqu.com/api/gateway/pay"

# 请求参数（根据实际接口要求填写）
# amount="1300"                   # 金额 (单位分)
amount=$(( (RANDOM % 49901) + 100 ))
mch_id="10020"                # 商户编号
# out_trade_no="11720"           # 商户订单号
out_trade_no=$(date +%s%N)$RANDOM
notify_url="http://example.com/notify" # 回调地址
pay_name="张三"               # 付款人银行卡号姓名

# 商户秘钥
secret_key="8db5ef5a-dce6-425c-b8f2-73bc65e15dc2"

# 拼接参数并按 ASCII 码排序
params="amount=${amount}&mch_id=${mch_id}&notify_url=${notify_url}&out_trade_no=${out_trade_no}&pay_name=${pay_name}"

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
