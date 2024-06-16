//导入
import request from '@/utils/request.js'
export function test() {
    return request.get('/test');
}