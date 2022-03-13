import { observer } from 'mobx-react';
import Box from '../../../../app/components/Box';
import Text from 'src/app/components/Text';
import { useNavigate } from 'react-router';
import { RootStoreContext } from 'src/app/stores/rootStore';
import { useContext } from 'react';
import LinkListItem from './LinkListItem';
import ReactPaginate from 'react-paginate';
import List from 'src/app/components/List';

function LinkList() {

    const rootStore = useContext(RootStoreContext);
    const { setActivePage,linkList,totalPages,setOffset ,LIMIT,activePage } = rootStore.linkStore;
  
   const handlePaginationChange = (e) => {
     debugger;
      const selectedPage = e.selected;
      const offset = selectedPage * LIMIT;
      setOffset(offset);
      setActivePage(selectedPage);
   }

  return (
    <>
    <List className='link-list'>
     {linkList.map((link) => (
           <LinkListItem key={link.linkUrl} link={link} />
          ))}
     </List>
     {linkList.length >0 &&
        <div className='pagination-container'>
        <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      breakLabel={"..."}
                      pageCount={totalPages}
                      pageRangeDisplayed={LIMIT}
                      onPageChange={handlePaginationChange}
                      containerClassName={"pagination"}
                      pageClassName={"pages"}
                      activeClassName={"active"}
                      forcePage={activePage}
                      />
        </div>
     }
   
    </>
  );
}

export default observer(LinkList);
