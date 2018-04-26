// 컬러정의 입니다.
// default : 기본컬러
// primary : 메인컬러
// secondary : 세컨더리 컬러
// disabled : 비활성
// warning : 경고컬러
// danger : 위험컬러
import { css } from "styled-components";

const color = {
  default: {
    color: `color: rgba(0, 0, 0, 0.87);`,
    backgroundColor: `background-color: #fff;`
  },
  primary: {
    color: `color: rgb(0, 188, 212);`,
    backgroundColor: `background-color: rgb(0, 188, 212);`
  },
  secondary: {
    color: `color: rgb(255, 64, 129);`,
    backgroundColor: `background-color: rgb(255, 64, 129);`
  },
  disabled: {
    color: `color: rgba(0, 0, 0, 0.3);`,
    backgroundColor: `background-color: rgba(0, 0, 0, 0.3);`
  },
}

export default color