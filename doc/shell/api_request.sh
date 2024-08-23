#!/bin/bash

# 生成 MD5 签名的函数
generate_md5_signature() {
    local params="$1"
    local key="$2"
    local sign_string="${params}&key=${key}"
    echo -n "${sign_string}" | md5sum | awk '{print $1}'
}

# 请求的 URL
api_url="https://fen.lianzhouqu.com/api/gateway/pay"

# 请求参数（根据实际接口要求填写）
amount="100"
mch_id="10020"
out_trade_no="1212"
notify_url="http://example.com/notify"
pay_name="张三"

# 商户秘钥
secret_key="8db5ef5a-dce6-425c-b8f2-73bc65e15dc2"

# 拼接参数
params="amount=${amount}&mch_id=${mch_id}&out_trade_no=${out_trade_no}&notify_url=${notify_url}&receive_account=${receive_account}&receive_bank=${receive_bank}&receive_name=${receive_name}"

# 生成签名
signature=$(generate_md5_signature "$params" "$secret_key")

# 发送 POST 请求
response=$(curl -X POST "${api_url}" -d "${params}&sign=${signature}" -H "Content-Type: application/x-www-form-urlencoded")

# 打印响应
echo "Response: ${response}"


# 外网面板地址: http://16.162.63.117:8888/78b6f47a
# 内网面板地址: http://172.31.28.153:8888/78b6f47a
# username: ikulrv5p
# password: be4dbc76
