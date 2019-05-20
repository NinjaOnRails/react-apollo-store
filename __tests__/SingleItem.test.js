import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import ItemDetail, { ITEM_DETAIL_QUERY } from '../components/ItemDetail';
import { fakeItem } from '../lib/testUtils';

describe('<ItemDetail/>', () => {
  it('renders with proper data', async () => {
    const mocks = [
      {
        // when someone makes a request with this query and variable combo
        request: { query: ITEM_DETAIL_QUERY, variables: { id: '123' } },
        // return this fake data (mocked data)
        result: {
          data: {
            item: fakeItem(),
          },
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ItemDetail id="123" />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...');
    await wait();
    wrapper.update();
    // console.log(wrapper.debug());
    expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('img'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('p'))).toMatchSnapshot();
  });

  it('Errors with a not found item', async () => {
    const mocks = [
      {
        request: { query: ITEM_DETAIL_QUERY, variables: { id: '123' } },
        result: {
          errors: [{ message: 'Items Not Found!' }],
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ItemDetail id="123" />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // console.log(wrapper.debug());
    const item = wrapper.find('[data-test="graphql-error"]');
    expect(item.text()).toContain('Items Not Found!');
    expect(toJSON(item)).toMatchSnapshot();
  });
});
