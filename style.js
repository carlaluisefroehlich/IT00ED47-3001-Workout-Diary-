import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({

  /* Header */
  header: {
    backgroundColor: "#388E32",
    paddingTop: StatusBar.currentHeight + 50, 
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, 
  },

  /* Safe Area */
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  /* general App Container */
  container1: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },

  mainView: {
    flex: 1,
    paddingBottom: 80,
  },

  /* Navigationsleiste */
  navView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#388E32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  tabText: {
    fontSize: 10,
    color: "#555555",
    marginTop: 5,
  },

  selectedTabText: {
    color: "white",
  },

  iconContainer: {
    alignItems: "center",
  },

  /* Add Workout */
  container2: {
    flex: 1,
    paddingTop: 45, 
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    width: "100%", 
  },

  scrollContent: {
    flexGrow: 0,
    alignItems: "center",
    paddingVertical: 10,
    paddingBottom: 20,
  },

  /* general Cards */
  card: {
    width: "90%",
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#2c3e50",
  },

  buttonContainer: {
    width: "90%",
    marginTop: 20,
    marginBottom: 20,
  },

  /* DateInput */
  container3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonText: {
    color: "#3498db",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  /* Workout Diary */
  scrollContainerWorkoutDiary: {
    paddingTop: StatusBar.currentHeight + 100, 
    paddingBottom: 80, 
    alignItems: "center",
  },

  containerWorkoutDiary: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: StatusBar.currentHeight + 100,
    paddingBottom: 80, 
    alignItems: "center",
  },

  contentContainerWorkoutDiary: {
    width: "90%",
    alignItems: "center",
  },

  cardWorkoutContainer: {
    width: "95%",
    marginVertical: 6,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardContent: {
    padding: 20,
    alignItems: "center",
  },

  distanceText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2C3E50",
  },

  distanceValue: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#388E32",
    marginTop: 5,
  },

  /* Add Button */
  addButton: {
    backgroundColor: "#388E32",
    borderRadius: 12,
    paddingVertical: 6,
    width: "100%",
  },

  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* Distance Input */
  distanceInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },

  /* Distances */
  containerDistances: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },

  labelDistances: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },

  distance: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#388E32",
  },

  /* Dropdown */
  containerDropdown: {
    width: "90%", 
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center", 
  },

  dropdown: {
    width: "100%", 
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  /* Duration Input */
  durationInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },

  /* Task */
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },

  taskItem: {
    backgroundColor: "#FFF",
    padding: 12, 
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6, 
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  itemText: {
    marginRight: 10,
    fontSize: 16,
  },

  /* Total Distance */
  containerTotalDistance: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  labelTotalDistance: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  distanceTotal: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#388E32",
  },
});

export default style;
