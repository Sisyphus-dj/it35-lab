import React, { useState } from 'react';
import {
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/react';

const SearchContainer: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const topics = [
    {
      title: 'Agile Development',
      description: 'A flexible, iterative approach to software development.',
      full: 'Agile Development is a methodology that promotes continuous iteration and testing throughout the development lifecycle. It encourages team collaboration, customer feedback, and flexible response to change.'
    },
    {
      title: 'CRUD Operations',
      description: 'Create, Read, Update, Delete basics.',
      full: 'CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used in persistent storage systems like databases. CRUD is a foundational concept in full-stack development.'
    },
    {
      title: 'Cross-Platform Development',
      description: 'Develop once, deploy anywhere.',
      full: 'Cross-platform development allows developers to create applications that work on multiple platforms such as iOS, Android, and web using a single codebase. Popular tools include React Native and Flutter.'
    },
    {
      title: 'RESTful APIs',
      description: 'APIs following REST principles.',
      full: 'RESTful APIs use HTTP requests to perform CRUD operations on resources. They are stateless, scalable, and commonly used in modern app development for client-server communication.'
    },
    {
      title: 'State Management',
      description: 'Managing app state efficiently.',
      full: 'State management refers to handling the data that drives your application’s UI. Popular solutions include Redux, Context API, and MobX for React applications.'
    },
    {
      title: 'Authentication',
      description: 'Securing user access.',
      full: 'Authentication is the process of verifying user identity. Common methods include JWT, OAuth, and social logins. It is essential for protecting user data and app resources.'
    },
    {
      title: 'Push Notifications',
      description: 'Engage users with timely updates.',
      full: 'Push notifications allow apps to send messages to users even when the app is not active. They are widely used for user engagement and timely information delivery.'
    },
    {
      title: 'Responsive Design',
      description: 'Apps that adapt to any screen.',
      full: 'Responsive design ensures your app looks and works well on devices of all sizes. Techniques include flexible layouts, media queries, and adaptive components.'
    },
    {
      title: 'App Deployment',
      description: 'Publishing your app to users.',
      full: 'App deployment involves building, testing, and releasing your app to platforms like the App Store, Google Play, or the web. It includes versioning, signing, and distribution processes.'
    },
    {
      title: 'Unit Testing',
      description: 'Testing individual components.',
      full: 'Unit testing involves writing tests for small, isolated pieces of code to ensure they work as expected. Tools like Jest and React Testing Library are commonly used in app development.'
    }
  ];

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchText.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchText.toLowerCase()) ||
    topic.full.toLowerCase().includes(searchText.toLowerCase())
  );

  const openModal = (topic: any) => {
    setSelectedTopic(topic);
    setShowModal(true);
  };

  return (
    <>
      <IonSearchbar
        value={searchText}
        onIonInput={(e: any) => setSearchText(e.detail.value!)} // Fixed handler
        debounce={300}
        placeholder="Search for a topic..."
      />
      <IonList>
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic, index) => (
            <IonItem key={index} button onClick={() => openModal(topic)}>
              <IonLabel>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
              </IonLabel>
            </IonItem>
          ))
        ) : (
          <IonText>No topics found.</IonText> 
        )}
      </IonList>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{selectedTopic?.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText>{selectedTopic?.full}</IonText>
          <IonButton expand="block" onClick={() => setShowModal(false)}>
            Close
          </IonButton>
        </IonContent>
      </IonModal>
    </>
  );
};

export default SearchContainer;