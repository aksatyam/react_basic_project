# react_basic_project

app/assets - This is where all the images, videos, etc will go in.
app/config - This is where configurations for the app will go in. For example, your environment specific config for dev and prod, etc.
app/styles - This is where your global styles, themes, and mixins will go.
app/utils - This is where all the services/utility files such as HTTP utility to make API calls, storage utility, data transformation utility, etc will go.
app/components - The directory will contain all the dumb components. In short, these components will only do layouting and won't contain any states or business logic inside them. All the data to these components will be passed in as props. This concept will be explained in detail further in the book.
app/pages - This directory will hold all the smart components. Smart components are those components which contain business logic and states in them. Their job is to pass the props to the dumb components after all the business logic has been executed.
app/routes - This is where we will keep all our app's routing logic. This will contain the map between the pages(smart components) and the routes.
app/redux - This will contain all our redux state management files like actions, reducers, store config, thunks etc.
