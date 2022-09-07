import { useState, useEffect } from 'react'
import '../assets/styles/components/listing.scss';
import ListingItem from './ListingItem'

const items = [
  { id: '0', title: 'Item 0', description: 'This is the Listing Item no.1, woah!', imageUrl: 'https://via.placeholder.com/274x352' },
  { id: '1', title: 'Item 1', description: 'This is the Listing Item no.2, woah!', imageUrl: 'https://via.placeholder.com/274x352' },
  { id: '2', title: 'Item 2', description: 'This is the Listing Item no.3, woah!', imageUrl: 'https://via.placeholder.com/274x352' },
  { id: '3', title: 'Item 3', description: 'This is the Listing Item no.4, woah!', imageUrl: 'https://via.placeholder.com/274x352' },
  { id: '4', title: 'Item 4', description: 'This is the Listing Item no.5, woah!', imageUrl: 'https://via.placeholder.com/274x352' }
]

const categoryName = 'Category Name'

const Listing = () => {

  const [chosenItemId, setChosenItemId] = useState()
  const [showMoreModalID, setShowMoreModalID] = useState()
  const [showMoreModalItem, setShowMoreModalItem] = useState({})


  useEffect(() => {
    setShowMoreModalItem(items.find(item => item.id === showMoreModalID))
  }, [showMoreModalID]);

  return (
    <>
      <div className="listing">
        <h2 className="listing__category-title">{categoryName}</h2>
        {chosenItemId
          ? <p>The chosen item id is: {chosenItemId}</p>
          : <p>No item chosen</p>
        }
        {showMoreModalItem
          ? <p>The modal item title is: {showMoreModalItem.title}</p>
          : <p>No modal item active</p>
        }
        <div className="listing__category-items">
          {items.map((item) =>
            <ListingItem
              key={item.id}
              item={item}
              onItemChoose={setChosenItemId}
              onShowMoreModal={setShowMoreModalID}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Listing;
