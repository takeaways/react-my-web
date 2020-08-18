import React from "react";
import {render} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
import TopBar from '.';

test('TopBar',()=>{
  const {container} =render((<MemoryRouter><TopBar/></MemoryRouter>))
  expect(container).toHaveTextContent("Geonil Jang(FE)");
})