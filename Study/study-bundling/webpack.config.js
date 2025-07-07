import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './main.tsx', // 어떤 파일을 진입점으로 번들링할지
  mode: 'development', // 소스맵 포함, 최소한의 코드 압축(공백 제거, 변수명 단순화 등)
  output: {
    filename: 'bundle.js', // 번들로 만들어질 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 파일이 어디에 저장될지
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts와 .tsx 파일들은
        use: [
          {
            loader: 'babel-loader', // babel loader로 처리해요
            options: {
              presets: [
                '@babel/preset-env', // 최신 JS 문법을 변환해요
                ['@babel/preset-react', { runtime: 'automatic' }], // JSX를 변환해요
                '@babel/preset-typescript', // 타입스크립트를 변환해요
              ],
            },
          },
        ],
        exclude: /node_modules/, // 외부 모듈은 제외해요.
      },
      {
        test: /\.css$/, // .css 파일을 처리해요
        use: [
          'style-loader', // CSS를 <style> 태그로 주입해요
          'css-loader', // CSS를 JavaScript 모듈로 변환해요
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 이미지 파일 확장자
        type: 'asset', // Asset modules 사용
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 파일을 import할 때 확장자를 생략할 수 있어요. TypeScript와 JavaScript를 혼용하는 프로젝트에서 설정해두면 좋아요.
  },
};
