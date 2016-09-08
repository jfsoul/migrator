find "./GTN Resources copy" -depth | while read -r SRC
do
    DST=`dirname "${SRC}"`/`basename "${SRC}" | tr '[A-Z]' '[a-z]'`
    if [ "${SRC}" != "${DST}" ]
    then
        (mv "${SRC}" "${DST}.renametmp" && mv "${DST}.renametmp" "${DST}") || echo "${SRC} was not renamed"
    fi
done