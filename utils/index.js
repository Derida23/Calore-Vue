export const success = (res) => {
  const data = {
    show_alert: true,
    title_alert: 'success',
    message_alert: res.data.message,
    loading: false,
    data: res.data.data,
    code: Number(res.data.code),
  }

  return data
}

export const failed = (res) => {
  const data = {
    show_alert: true,
    title_alert: 'error',
    message_alert: JSON.stringify(res.data.data),
    loading: false,
    data: null,
    code: Number(res.data.code),
  }

  return data
}
