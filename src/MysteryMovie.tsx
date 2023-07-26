import { Card, CardHeader, Divider, Flex, Text } from "@chakra-ui/react";

export default function MysteryMovie() {
    return (
        <Card flex="1" margin="2rem" paddingX="1rem" bg="darkGrey" border="5px solid" borderColor="lightRed">
            <CardHeader margin="-1rem" textAlign="center" fontSize="2rem" fontWeight="bold" color="white">Mystery Movie</CardHeader>
            <Divider />
            <Flex flex="1" marginY="1rem" direction="column" justifyContent="space-between" fontSize="2rem" color="white">
                <Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Year:</Text>
                    </Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Gross:</Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Director:</Text>
                    </Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Distributor:</Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Text paddingRight="1rem" fontWeight="bold">Genres:</Text>
                </Flex>
                <Flex>
                    <Text paddingRight="1rem" fontWeight="bold">Starring:</Text>
                </Flex>
            </Flex>
        </Card>
    )
}