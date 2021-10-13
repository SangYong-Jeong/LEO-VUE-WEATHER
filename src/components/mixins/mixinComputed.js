const withComputed = {
  computed: {
    style: function () {
      if (this.styled) {
        console.log(this.name)
        return `
        font-size: ${this.styled.size || 'inheit'};
        color: ${this.styled.color || 'inherit'};`
      } else {
        return ''
      }
    }
  }
}

const withIconComputed = {
  computed: {
    style: function () {
      console.log(this.src)
      if (this.styled && this.styled.width) {
        return `width: ${this.styled.width};`
      } else {
        return 'width: 120px;'
      }
    }
  }
}

export { withComputed, withIconComputed }
// 공통으로 쓰이는 부분 짤라다 쓰는 곳 : 객체화 시켜서 안에 넣어놓고 사용하면 됨
