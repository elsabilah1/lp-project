import { Box, Grid, GridItem, Text } from '@chakra-ui/react'

const Description = () => {
  return (
    <Grid my={{ base: 6, lg: 24 }} maxWidth="container.xl" mx="auto" px="4">
      <GridItem fontSize={{ base: 12, lg: 24 }} letterSpacing="wide">
        Every business needs digital marketing these days. Making a website is
        one of them. Even though this job is hard, you can hire a web
        development service to do it for you.
        <br />
        <br />
        <Text
          fontWeight="800"
          fontSize={{ base: 16, lg: 32 }}
          letterSpacing="wide"
        >
          What is a Web Development Service?
        </Text>
        <br />
        Putting together a site is a pretty complicated job. To build a site
        that shows who the company is, you need many different skills that work
        together as a team.
        <br />
        <br />
        To build a team like this, you need to hire people with specific skills,
        like designing website flow and managing page layouts and servers. But
        you don’t have to start from scratch to build a team. Some web
        development service providers can help you build an entire website.
        <br />
        <br />
        The services offered include designing websites based on a company’s
        needs, scripting from the user side, developing servers, and setting up
        security. A team will carry out the work with their respective
        expertise. Among the skills required are the following.
        <br />
        <br />
        <Box
          w={{ base: 'full', md: '60%' }}
          mx="auto"
          pos="relative"
          h={{ base: '2xs', md: 'lg' }}
          bgSize="contain"
          bgPos="center"
          bgRepeat="no-repeat"
          bgImage="/assets/images/blog_article.png"
        />
        <br />A team will carry out the work with their respective expertise.
        Among the skills required are the following.
        <br />
        <br />
        <Text
          fontWeight="800"
          fontSize={{ base: 16, lg: 32 }}
          letterSpacing="wide"
        >
          1. Front-end Development
        </Text>
        <br />
        The role of front-end development is to build a user interface (UI), a
        website page that users see during activities on the site. This role
        focuses on user experience (UX).
        <br />
        <br />
        This role’s primary purpose is to ensure the user is satisfied. The
        trick is to build pages that make it easier for users to reach their
        goals when opening the site.
        <br />
        <br />
        <br />
        <Text
          fontWeight="800"
          fontSize={{ base: 16, lg: 32 }}
          letterSpacing="wide"
        >
          2. Back-end Development
        </Text>
        <br />
        This part, instead of front-end development, is in charge of creating
        sections online users do not see. Back-end development is in charge of
        site management pages.
        <br />
        <br /> The primary purpose is to provide a server that makes website
        management simple. This is necessary so that all features function
        properly.
        <br />
        <br /> In further detail, the back-end developer’s job entails dealing
        with servers, operating systems, APIs, and databases, as well as
        security and site structure.
        <br />
        <br />
        <br />
        <Text
          fontWeight="800"
          fontSize={{ base: 16, lg: 32 }}
          letterSpacing="wide"
        >
          3. Full-stack Development
        </Text>
        <br />
        Full-stack development covers everything if front-end and back-end
        development only work on one side of a website. This part depends on the
        site being built from the beginning to the end.
        <br />
        <br />
        Full-stack development is also used to handle the different technologies
        used on the site, like servers, the user interface (UI), and others..
        <br />
        <br />
        <br />
        <Text
          fontWeight="800"
          fontSize={{ base: 16, lg: 32 }}
          letterSpacing="wide"
        >
          4. Mobile Development
        </Text>
        <br />
        Many users are more active on their phones or tablets these days. Each
        site needs to have a mobile version for this to work.
        <br />
        <br />
        Mobile Development is a section that knows how to make apps that work
        well on mobile devices. Mobile apps are different in how they work, so
        they need to be worked on by people with different skills.
      </GridItem>
    </Grid>
  )
}

export default Description
