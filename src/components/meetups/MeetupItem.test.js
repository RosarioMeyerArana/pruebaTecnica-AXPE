/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */

import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";

describe('<MeetupItem/>', () => {

  const data = {
    id: 'm1',
    title: 'the meetup title' ,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'meetup address' ,
    description: 'meetup description'
  }
  
  test('renders without crashing', () => {
    const wrapper = shallow(<MeetupItem item={data} />);
    expect(wrapper.exists()).toBe(true);
  });
  
  test('button can be clicked to add favorite', () => {
    const handleClick = jest.fn()

    const wrapper = shallow(<MeetupItem item={data} handleAddFavorites={handleClick} />)
    expect(wrapper.find("button").length).toBe(1)
    expect(wrapper.find("button").text()).toBe('Add to favorites')

    const renderedWrapper = render(<MeetupItem item={data} handleAddFavorites={handleClick} />)
    renderedWrapper.getByText("Add to favorites").click()
    
    expect(handleClick).toHaveBeenCalledTimes(1)

  })
})
