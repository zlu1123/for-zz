import React, { useEffect, useState } from 'react';
import { SubmitBar, ProductCard, Stepper } from 'react-vant';
import { zzStoreInfo } from '@src/config';
import { add, ceil, cloneDeep, fill, forEach } from 'lodash';
export function Home() {
  const [productPriceInfo, setProductPriceInfo] = useState(fill(new Array(zzStoreInfo.length), 0));
  console.log('🚀 ~ file: Home.js:7 ~ Home ~ productPriceInfo:', productPriceInfo);
  const [allPrice, setAllPrice] = useState(0);

  useEffect(() => {
    let tempNum = 0;
    forEach(productPriceInfo, item => {
      tempNum = add(tempNum, Number(item));
    });
    setAllPrice(tempNum);
  }, [productPriceInfo]);

  return (
    <>
      <div style={{ marginBottom: '80px' }}>
        {zzStoreInfo.map((item, index) => {
          return (
            <ProductCard
              key={index}
              lazyload
              num={
                <Stepper
                  min={1}
                  integer
                  step={1}
                  onChange={val => {
                    const currentPrice = ceil(val * item.price);
                    const list = cloneDeep(productPriceInfo);
                    list.splice(index, 1, currentPrice);
                    setProductPriceInfo(list);
                  }}
                  inputWidth={50}
                />
              }
              price={item.price}
              desc={item.desc}
              title={item.text}
              // thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
          );
        })}
      </div>

      <SubmitBar
        decimalLength={0}
        disabled
        price={ceil(allPrice * 100)}
        buttonText="提交订单"
        onSubmit={() => {
          alert(1);
        }}
        safeAreaInsetBottom
      />
    </>
  );
}
