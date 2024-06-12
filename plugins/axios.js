export default function (ctx) {
  ctx.$axios.onError((err) => {
    if (err) { // undefined and null check
      if (!err.response) { // Network error
        ctx.$toast.error('خطا در اتصال به سرور.', { singleton: true })
      } else {
        let msg = 'خطای داخلی'
        if (err.response.data) {
          if (err.response.data.detail instanceof Array) {
            msg = 'خطای سمت سرور ' + err.response.code
          } else {
            msg = err.response.data.detail
          }
        }
        if (err.response.data.code !== 2000 && err.response.data.code !== 3000) { // User or business not found, check for registered before
          ctx.$toast.error(msg, { singleton: true })
        }
        throw err
      }
    }
    throw err
  })
}
