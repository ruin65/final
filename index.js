function handleSubmit(data,url) {
    const input = data
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            const value = Number(window.location.href.split('?num=')[1]) // 上个页面传递过来的分值
            let num = value + Number(input[i].value)
            window.location.href =  `${url}.html?num=${num}`
        }
    }
}
