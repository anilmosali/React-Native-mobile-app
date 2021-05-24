import React from "react";
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import FamilyPerson from "./FamilyPerson";

const FamilyList = ({ data }) => {
  const familyTree = data.familyTree;
  const relations = data.relations;

  const user = familyTree.user;
  // const tree = familyTree.nodes.map((item) => item.id);

  let flatlistData = []; //this is the data we pass to the flatlist to render
  let filteredArray = [];
  let filtersToBeApplied = [user];
  let existingArray = [];

  //find the list of relations for each personID
  const nextNodes = (person, filtersToBeApplied) => {
    return relations.filter(
      (item) =>
        (item.person1 === person) & !filtersToBeApplied.includes(item.person2)
    );
  };

  const pushToArray = (existingArray, element) => {
    flatlistData.push([
      ...existingArray,
      element.person1,
      element.relationship,
      element.person2,
    ]);
  };

  //function to find list of all objects
  const listGenerator = (person) => {
    filteredArray = nextNodes(person, filtersToBeApplied);

    if (filteredArray.length) {
      filteredArray.forEach((item) => filtersToBeApplied.push(item.person2));
      //console.log("Filters to be applied", filtersToBeApplied);

      filteredArray.forEach((element) => {
        pushToArray(existingArray, element);
        existingArray.push(element.person1, element.relationship);

        listGenerator(element.person2);
        existingArray.pop();
        existingArray.pop();
      });
    } else {
      return person;
    }
  };

  //call this function to generate the data array into flatlistData
  listGenerator(user);
  console.log(flatlistData);
  flatlistData.sort((a, b) => a.length - b.length);
  flatlistData = flatlistData.map((item, index) => {
    let key = item[0].concat("-", index.toString());
    return { key: key, node: item };
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flatlistData}
        renderItem={(itemData) => {
          //console.log(item);
          return <FamilyPerson data={itemData.item} />;
        }}
        contentContainerStyle={styles.flatlist}
      />
    </SafeAreaView>
  );
};

export default FamilyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  flatlist: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    paddingBottom: 70,
  },
});
