
import  { useState } from 'react';
import Tabs from './Tabs'; // Import your Tabs component
import TabButton from './TabButton'; // Import your TabButton component


function Descriptions() {
  const [selectedTab, setSelectedTab] = useState(0); // State to manage selected tab

  const descriptions = [
    { title: 'All ABout Problems 1', content: 'Content for the first tab goes here.' },
    { title: 'All ABout  Words 2', content: 'Content for the second tab goes here.' },
    { title: 'All About Quiz 2', content: 'Content for the second tab goes here.' },
    // Add more descriptions as needed...
  ];

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="tab-folders">
      {descriptions.map((desc, index) => (
        <div key={index} className="tab-folder">
          <Tabs ButtonsContainer="tab-header">
            <TabButton
              isSelected={selectedTab === index}
              onSelect={() => handleTabSelect(index)}
            >
              {desc.title}
            </TabButton>
          </Tabs>
          <div className={`tab-content ${selectedTab === index ? 'active' : ''}`}>
            {desc.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Descriptions;