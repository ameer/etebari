export default function (ctx) {
  ctx.$axios.onError((err) => {
    if (err) { // undefined and null check
      if (!err.response) { // Network error
        ctx.$toast.error('خطا در اتصال به سرور.', { singleton: true })
      } else {
        const msg = err.response.data?.detail ?? 'خطای داخلی'
        if (err.response.data.code !== 2000) { // User not found, check for registered before
          ctx.$toast.error(msg, { singleton: true })
        }
        throw err
      }
    }
    throw err
  })
}
