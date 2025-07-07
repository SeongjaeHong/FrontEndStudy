import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './main.ts', // 어떤 파일을 진입점으로 번들링할지
  mode: 'development', // 소스맵 포함, 최소한의 코드 압축(공백 제거, 변수명 단순화 등)
  output: {
    filename: 'bundle.js', // 번들로 만들어질 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 파일이 어디에 저장될지
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // .ts 파일들은
        use: 'ts-loader', // ts-loader를 거쳐 처리돼요.
        exclude: /node_modules/, // 외부 모듈은 제외해요.
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // 파일을 import할 때 확장자를 생략할 수 있어요. TypeScript와 JavaScript를 혼용하는 프로젝트에서 설정해두면 좋아요.
  },
};
