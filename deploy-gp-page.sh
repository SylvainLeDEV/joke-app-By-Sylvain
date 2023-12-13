#!/bin/bash
echo "------------------"
echo "----- BUILD ------"
echo "------------------"
npm run build &&

echo "----------------------------------"
echo "----- Add dist in git stage ------"
echo "----------------------------------"
git add dist -f &&

echo "-----------------------------------------"
echo "----- Add all changes in git stage ------"
echo "-----------------------------------------"
git add . 

echo "-------------------"
echo "----- Commit ------"
echo "-------------------"
git commit -m "test redirect" &&

echo "------------------"
echo "----- PUSH -------"
echo "------------------"
git push origin add-gp-page &&

echo "------------------"
echo "----- Deploy ------"
echo "------------------"
git subtree push --prefix dist origin gh-pages