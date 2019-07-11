let id = 1000

export let data = [
  {
    "id": 1,
    "name": "技术部",
    "level": 1,
    "child": [
      {
        "id": 2,
        "name": "运维组",
        "level": 2,
        "child": [
          {
            "id": 3,
            "name": "godo",
            "level": 3,
            "child": []
          }
        ]
      },
      {
        "id": 4,
        "name": "测试组",
        "level": 2,
        "child": []
      }
    ]
  }
]

export let getServiceTree = () => {
  return {
    "code": 200,
    "message": 'ok',
    "is_superuser": true, //是否管理员，管理员可操作，非管理员看不见操作按钮
    "data": data
  }
}

export let delItem = (data, payload) => {
  for(let i = 0; i < data.length; i++) {
    if (data[i].id === payload.id) {
      data.splice(i, 1)
      break
    }
    if (data[i].child && data[i].child.length) {
      delItem(data[i].child, payload)
    }
  }
}

export let addItem = (data, payload) => {
  let addObj
  for(let i = 0; i < data.length; i++) {
    if (data[i].id === payload.id) {
      addObj = {
        id: id++,
        name: payload.name,
        level: data[i].level + 1,
        child: []
      }
      data[i].child.unshift(addObj)
      break
    }

    if (data[i].child && data[i].child.length) {
      addItem(data[i].child, payload)
    }
  }
}

export let updateItem = (data, payload) => {
  for(let i = 0; i < data.length; i++) {
    if (data[i].id === payload.id) {
      data[i].name = payload.name
      break
    }

    if (data[i].child && data[i].child.length) {
      updateItem(data[i].child, payload)
    }
  }
}
