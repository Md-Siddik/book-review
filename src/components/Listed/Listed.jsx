import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../ReadList/ReadList'
import WhiteList from '../WhiteList/WhiteList'

const Listed = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="text-xl">
            <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
                <ReadList></ReadList>
            </TabPanel>

            <TabPanel>
                <WhiteList></WhiteList>
            </TabPanel>
        </Tabs>
    );
};

export default Listed;