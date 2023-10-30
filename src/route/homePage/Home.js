import React from "react";
import { SubmitBar, Checkbox, ProductCard, Stepper } from "react-vant";
import { zzStoreInfo } from "@src/config";

export function Home() {
  return (
    <>
      <ProductCard
        lazyload
        num={
          <Stepper
            onOverlimit={() => console.log("overlimit")}
            onMinus={() => console.log("minus")}
            onPlus={() => console.log("plus")}
            onChange={(v) => console.log(v)}
          />
        }
        price='2.00'
        desc='描述信息'
        title='商品名称'
        thumb='https://img.yzcdn.cn/vant/ipad.jpeg'
      />
      <div className='demo-submit-bar'>
        <SubmitBar
          price='3050'
          buttonText='提交订单'
          onSubmit={() => {
            alert(1);
          }}
        ></SubmitBar>
      </div>
    </>
  );
}
