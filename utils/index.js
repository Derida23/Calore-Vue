export const success = (res) => {
  const data = {
    message: {
      show_alert: true,
      title_alert: 'success',
      message_alert: capital(res?.data?.message ?? ''),
    },
    loading: false,
    data: res.data.data,
    code: Number(res.data.code),
  }

  return data
}

export const failed = (res) => {
  const data = {
    message: {
      show_alert: true,
      title_alert: 'error',
      message_alert: capital(res?.data?.message ?? ''),
    },
    loading: false,
    data: null,
    code: Number(res.data.code),
  }

  return data
}

export const capital = (text) => {
  text = text
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  return text
}
