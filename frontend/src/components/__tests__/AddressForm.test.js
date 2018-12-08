import React from "react"
import { shallow } from "enzyme"
import AddressForm from "../AddressForm";

const address = {
  id: "1544109127653",
  title: "Leipziger str.",
  address: "Leipziger strasse",
  lat: 52.511123,
  lng: 13.399605
}

describe("AddressForm", () => {
  it("should render properly for creating", () => {
    const wrapper = shallow(<AddressForm isFormOpened={true} availableAddresses={[]}/>)
    expect(wrapper).toMatchSnapshot()
  })
  it("should render properly for editing", () => {
    const wrapper = shallow(<AddressForm isFormOpened={true} availableAddresses={[]} addressToEdit={address}/>)
    expect(wrapper).toMatchSnapshot()
  })
  it("should be not valid when any input is missing", () => {
    const wrapper = shallow(<AddressForm isFormOpened={true} availableAddresses={[]}/>)
    const submitBtnElem = wrapper.find('.save-btn')
    expect(submitBtnElem.props().disabled).toBe(true)
  })
  it("should set the state properly", () => {
    const wrapper = shallow(<AddressForm isFormOpened={true} availableAddresses={[]}/>)

    const titleTextElem = wrapper.find('.text_field')
    titleTextElem.simulate('change', {target: {value: "Test"}})
    expect(wrapper.state().title).toBe("Test")

    wrapper.instance().onAddressChange('event', {newValue: address.address})
    expect(wrapper.state().address).toBe(address.address)

    wrapper.instance().onSuggestionSelected('event', {suggestion: {address: address.address, lat: address.lat, lng: address.lng}})
    expect(wrapper.state().address).toBe(address.address)
    expect(wrapper.state().lat).toBe(address.lat)
    expect(wrapper.state().lng).toBe(address.lng)
  })
  it("should be valid when all inputs are set", () => {
    const wrapper = shallow(<AddressForm isFormOpened={true} availableAddresses={[]}/>)
    wrapper.setState(address)
    const submitBtnElem = wrapper.find('.save-btn')
    expect(submitBtnElem.props().disabled).toBe(false)
  })
  it("should call proper function when submitted and pass arguments", () => {
    const onSaveClick = jest.fn()
    const wrapper = shallow(<AddressForm isFormOpened={true} onSaveAddress={onSaveClick}  availableAddresses={[]}/>)
    const formElem = wrapper.find('.form')
    wrapper.setState(address)
    formElem.simulate('submit', {preventDefault: jest.fn()})
    expect(onSaveClick).toHaveBeenCalledTimes(1)
    expect(onSaveClick).toHaveBeenCalledWith(address)
  })
  it("it should call proper function when canceled", () => {
    const onCancelClick = jest.fn()
    const wrapper = shallow(<AddressForm isFormOpened={true} onCancel={onCancelClick}  availableAddresses={[]}/>)
    const cancelBtnElem = wrapper.find('.cancel-btn')
    cancelBtnElem.simulate('click')
    expect(onCancelClick).toHaveBeenCalledTimes(1)
  })
})