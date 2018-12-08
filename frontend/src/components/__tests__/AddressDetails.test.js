import AddressDetails from "./../AddressDetails"
import React from "react"
import { shallow } from "enzyme"

const address = {
  id: "1544109127653",
  title: "Leipziger str.",
  address: "Leipziger strasse",
  lat: 52.511123,
  lng: 13.399605
}

describe("AddressDeatils", () => {
  it("should render properly", () => {
    const wrapper = shallow(<AddressDetails address={address} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should call proper function when edit button is clicked", () => {
    const onEditClickMock = jest.fn()
    const wrapper = shallow(
      <AddressDetails address={address} onEdit={onEditClickMock} />
    )
    const editBtnElem = wrapper.find(".edit-btn")
    editBtnElem.simulate("click")
    expect(onEditClickMock).toHaveBeenCalledTimes(1)
    expect(onEditClickMock).toHaveBeenCalledWith(address)
  })

  it("should call proper function when delete button is clicked", () => {
    const onRemoveClickMock = jest.fn()
    const wrapper = shallow(
      <AddressDetails address={address} onRemove={onRemoveClickMock} />
    )
    const editBtnElem = wrapper.find(".delete-btn")
    editBtnElem.simulate("click")
    expect(onRemoveClickMock).toHaveBeenCalledTimes(1)
    expect(onRemoveClickMock).toHaveBeenCalledWith(address.id)
  })
})
