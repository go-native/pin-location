import AddressList from "./../AddressList"
import React from "react"
import { shallow } from "enzyme"

const addresses = [{
  id: "1544109127653",
  title: "Leipziger str.",
  address: "Leipziger strasse",
  lat: 52.511123,
  lng: 13.399605
},{
  id: "1544109127654",
  title: "Spandauer str.",
  address: "Spandauer strasse",
  lat: 52.511144,
  lng: 13.399655
}]

describe("AddressList", () => {
  it("should render properly", () => {
    const wrapper = shallow(<AddressList addresses={addresses} />)
    expect(wrapper).toMatchSnapshot()
  })
})
