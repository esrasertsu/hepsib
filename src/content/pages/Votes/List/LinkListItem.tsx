import { observer } from 'mobx-react'
import { useContext, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Box from 'src/app/components/Box';
import Text from 'src/app/components/Text';
import { ILink } from 'src/app/models/links'
import { RootStoreContext } from 'src/app/stores/rootStore';
import { ModalButtonWrapper, ModalContent, ModalParagraph, ModalTitle } from 'src/app/components/Modal/ModalContent';
import CloseIcon from 'src/app/components/Modal/CloseIcon';
import ListItem from 'src/app/components/List/ListItem';

interface IProps{
    link: ILink;
}
export default observer( function LinkListItem({link}:IProps){
   
    const rootStore = useContext(RootStoreContext);
    const { upVotes, downVotes,deleteLink, setToastList, toastList } = rootStore.linkStore;
    const {openModal,closeModal,modal} = rootStore.modalStore;

    const handleUpVote = (linkurl:string) =>{
        upVotes(linkurl);

    }

    const handleDownVote = (linkurl:string) =>{
        downVotes(linkurl);
    }

    const handleDelete = (linkurl:string) =>{
        deleteLink(link.linkUrl);
        if(modal.open) closeModal();
   
        const id = Math.floor((Math.random() * 101) + 1);

        var toastProperties = {
          id,
          backgroundColor: '#5cb85c',
          description:"Successsfully removed"
        }
     
        setToastList([...toastList, toastProperties]);
  }

    const handleDeleteItem =  (link:ILink) =>{
        if(modal.open) closeModal();
      
        openModal("", <>
        <CloseIcon onClick={closeModal}/>
         <ModalContent>
            {/* <CommentIcon /> */}
            <ModalTitle>Do you want to remove</ModalTitle>
            <ModalParagraph>
              {link.linkName}
            </ModalParagraph>
            <ModalButtonWrapper>
              <Button onClick={closeModal}>Cancel</Button>
              <Button onClick={() => handleDelete(link.linkUrl)}>
                Yes
              </Button> 
            </ModalButtonWrapper>
          </ModalContent>
        </>,false,
        "") 
    }

  return (
    <>

        <ListItem key={link.linkUrl} className="listItem">
            <div className='tooltip' onClick={() => handleDeleteItem(link)}>
              <Icon name="trash" color='red' />    
            </div>
            <Box className='listItem-vote-box'>
              <Text color="black" className='capital extra-bold' size="big" align='center'>
                     {link.votes}
                </Text> 
                <Text color="black" className='capital bold' align='center'>
                    points
                </Text>
            </Box>
           <div className='content-wrapper'>
               <div className='content'>
                    <Text color="black" className='bold' align='left' size="header">
                        {link.linkName}
                    </Text>
                    <a href={link.linkUrl} target="_blank">
                        ({link.linkUrl})
                    </a>
               </div>
                    <div className='btn-container'>
                        <Text color="secondary" className='bold' align='left' onClick={() => handleUpVote(link.linkUrl)}>
                            <Icon name="arrow up" /> <span>Up Vote</span>
                        </Text>
                        <Text color="secondary" className='bold' align='left' onClick={() => handleDownVote(link.linkUrl)}>
                            <Icon name="arrow down" /><span>Down Vote</span>
                        </Text>
                    </div>
           </div> 

            </ListItem>
            </>
  )

})