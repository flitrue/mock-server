# 数据mock-server
模拟数据，快速实现接口开发

# 开始
```
cd mock-server
npm install or yarn install
```

# 启动
```
npm start
pm2 start bin/www
pm2 start processes.json
```

# 关闭
```
pm2 delete mock-server
```
or
```
pm2 kill
```

# 示例

访问 [http://localhost:3000/stock?code=000725](http://localhost:3000/stock?code=000725)
