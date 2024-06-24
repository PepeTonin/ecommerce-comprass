# E-COMMERCE COMPRASS

## cart-react-context branch
This branch was the first state management solution adopted in the development of the app. Some performance issues were encountered due to unnecessary re-renders.

## Folder Structure

```plainText
app
.
├─ __mocks__                # Mocks for testing purposes
├─ __tests__                # Test files and configuration
├─ src                      # Source files
│    ├─ assets              # Static assets like images and fonts used in the app
│    │    ├─ app-images     # Images specific to the app
│    │    ├─ fonts          # Custom fonts used in the app
│    ├─ components          # Reusable UI components
│    │    ├─ ...            # Each component has its own folder, but it was omitted here
│    │    ├─ shared         # Shared components across screens
│    ├─ contexts            # React Contexts for state management  
│    ├─ routes              # Navigation configurations and route definitions
│    ├─ screens             # Screen components representing different app screens
│    ├─ styles              # Global styles
│    ├─ utils               # Utility functions
...
├─ App.tsx                  # Main entry point of the app
...
└─ README.md                # Documentation file for the project
```
