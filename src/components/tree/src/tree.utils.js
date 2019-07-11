export function getEditContent(h, data, node) {
  let self = this
  return (
    <span class="ly-visible">
      <el-button
        size="mini"
        type="text"
        on-click={ () => self.close(data, node) }
      >
        取消
      </el-button>
      <el-button
        size="mini"
        type="text"
        on-click={ () => self.editMsg(data, node) }
      >
        确认
      </el-button>
    </span>
  )
}

export function getDefaultContent(h, data, node) {
  let self = this
  return (
    <div class="ly-visible">
      {
        self.is_superuser &&
        (<span>
          <el-button
            size="mini"
            type="text"
            on-click={ () => self.update(node, data) }
          >
            编辑
          </el-button>

          {
            data.level !== 6 &&
            <el-button
              size="mini"
              type="text"
              on-click={ () => self.append(node, data) }
            >
              添加
            </el-button>
          }

          {
            data.level !== 1 &&
            <el-button
              size="mini"
              type="text"
              on-click={ () => self.remove(node, data) }
            >
              删除
            </el-button>
          }
        </span>)
      }
    </div>
  )
}
