# Code Challenge Decisions

## 1. Routing with React Router

I used `react-router-dom` to manage the application's routing. This library simplifies the process of creating and managing routes, enabling the seamless navigation required for the multi-step form.

## 2. Form Management with React Hook Form

I chose `react-hook-form` to manage the forms within the application. This library provides a simple yet powerful way to handle form state and validation with minimal re-renders, improving performance.

## 3. Caching with React Query

To leverage caching, I utilized `react-query`. This library allows for efficient data fetching, caching, synchronization, and server-state management. It was particularly useful for caching the list of colors retrieved from the API.

## 4. Schema Validation with Zod

For form validation, I used `Zod`. This library integrates seamlessly with `react-hook-form` through the `zodResolver` and provides a robust and intuitive way to define and enforce schema validations.

## 5. State Management with useContext

I implemented `useContext` for state management, storing the data across the multi-step form. This approach ensures that form data is consistently accessible across different components without prop drilling.

## 6. Separation of Concerns: Containers and Components

I adhered to a clear separation of concerns between containers (or pages) and components:

- **Containers (Pages)**: Responsible for accessing the "Data Layer" and organizing a layout with components. They manage the data fetching, form submission, and overall state of the application.
- **Components**: Focus on UI representation and handling user interactions. They are purely presentational and do not handle data fetching or state management.

## 7. Custom Hooks

To streamline the code and enhance reusability, I wrote several custom hooks:

- **useFetchColors**: Retrieves the list of colors from an external API and manages the caching with `react-query`.
- **useSubmitForm**: Handles the form submission to an external API, including the loading state and error handling.
- **useMultiStepForm**: Manages the multi-step form logic, including navigation between steps and state persistence.

## 8. Styling with Bootstrap

I used the Bootstrap UI framework to help style the solution with UI components. This choice provided a consistent and responsive design, reducing the need to write custom CSS from scratch.
