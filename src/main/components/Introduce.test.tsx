import React from "react";
import {render} from "@testing-library/react";
import Introduce from './Introduce';

describe('Introduce',()=>{
  it('render Introduce',()=>{
    const {getByText} = render((<Introduce/>));
    expect(getByText(/Hello/)).not.toBeNull();
  })
})
