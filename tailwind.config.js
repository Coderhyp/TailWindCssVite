module.exports = {
  // 要编写twcss的文件 
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  // 配置变量
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  //定义分隔符
  separator: '_',
}
