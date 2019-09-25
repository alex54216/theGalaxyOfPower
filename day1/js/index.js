class list{
    constructor(parent,title='',data =[]){
        // 校验数据
        jiaoyan(parent,'parent必须要有')
        jiaoyan(title,'title不能为空')
        jiaoyan(data instanceof Array,'data必须是一个数组')
        this.parent = parent
        this.title = title
        this.data = data
        this.render()
    }
    setTitle(title){
        this.title = title
        this.render()
    }
    getTitle(){
        return this.title
    }
    setData(data){
        this.data = data
        this.render()
    }
    getData(){
        return this.data
    }
    render(){
        let div = document.createElement('div')
        div.classList.add('title-ul')
        div.innerHTML = '开心就好'
        let ul = document.createElement('ul')
        let arr = []
        this.data.forEach((item)=>{
            arr.push(`
               <li>
                    <a href="javascript:;">我是title:${item.title}</a>
                    <div>
                        ${item.isVIP? '<p>我是vip</p>':''}
                        <p>${item.name}</p>
                        <p>${item.content}</p>
                    </div>
               </li>
            `)
        })
        ul.innerHTML =  arr.join('')
        this.parent.innerHTML = ''
        this.parent.appendChild(div)
        this.parent.appendChild(ul)
    }
}
let warp = document.querySelector('#warp')
console.log(warp)
let arr1 = [{
    title:'张三的歌',
    name:'张三',
    content:'lalalallalalalalalalalal我是自由盛开的花'
},{
    title:'张三的歌',
    name:'张三',
    content:'找不到的三寸月光不去想天空透下云彩的光不去想约定了的天堂'
}]
let myList = new list(warp,'zlcastle','hhh')