module.exports = {
  port: 5454, // 端口
  url: "http://localhost:5454",
  JWT_SECRET: "zzyzzy", // jwt 生成 token 的时候用的密钥
  SECRET_KEY: "zzyzzy",
  NODEMAILER: {
    email: "",
    pass: "",
    IMAP: "", // qq 授权码 
    POP3: "",
  },
  MYSQL: {
    HOST: "",
    DATABASE: "myblog",
    USER: "root",
    PASSWORD: "",
  },

  oss: {
    region: "",
    accessKeyId: "",
    accessKeySecret: "",
    bucket: "",
  },

  // github
  client_secret: "",
  client_id: "",
};
