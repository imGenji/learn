entry 模块入口
	context 找相对路径的文件会以context为根目录 默认为webpack.config的工作目录
	entry类型 string array 只会生成一个chunk 名称为main 
			  object 可以配置多个入口 每个入口生成一个chunk   chunk名称是object中的key
			   

output 出口
	只有一个chunk时  filename:bundle.js
	多个chunk时  filename:'[name],js'  为chunk的名称 此外还有 id hash(id的hash) contenthash(chunk内容的hash) 默认为webpack
	20位 [hash:8] 表示取8位
	
	
	
	
module 模块处理规则(loader)
resolve 寻找模块规则
plugins 扩展插件
devServer 
