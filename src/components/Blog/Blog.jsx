import React from "react";
import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle("Blog");

  return (
    <div className="lg:px-36 px-2">
      <div className="background-color rounded-lg text-center pb-16 lg:pt-12 pt-4">
        <h2 className="font-bold text-3xl lg:text-5xl">
          Here is some questions and answers
        </h2>
      </div>
      <div className="my-10">
        <h2 className="text-color mt-6 text-2xl lg:text-4xl font-bold">
          Q1: What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:{" "}
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            <p className="font-bold text-[#383838] mt-3">Access token</p>
            An access token is a credential that is used to authenticate and
            authorize a user or an application to access a protected resource or
            perform specific actions on behalf of the user. It is commonly used
            in the context of secure communication between a client (such as a
            mobile app or a web application) and a server.
            <p className="font-bold text-[#383838] mt-3">Refresh token</p>A
            refresh token is a type of token used in certain authentication and
            authorization protocols, such as OAuth, to obtain a new access token
            after the previous one has expired. While an access token is
            typically short-lived and has a limited lifespan, a refresh token
            has a longer expiration time.
            <p className="font-bold text-[#383838] mt-3">
              Token access process:
            </p>
            <ul>
              <li>
                1. Secure storage: Store the refresh token in a secure manner,
                ensuring that it is not easily accessible by unauthorized
                parties. For web applications, using HttpOnly and Secure flags
                for cookies can help protect against cross-site scripting (XSS)
                attacks.
              </li>
              <li>
                2. Encryption: If possible, encrypt the refresh token before
                storing it to add an extra layer of security.
              </li>
              <li>
                3. Least privilege: Only store the necessary information in the
                refresh token. Avoid including sensitive data or excessive user
                information that is not required for the token exchange.
              </li>
              <li>
                4. Expiration and revocation: Set an expiration time for refresh
                tokens and regularly check their validity. In case of suspected
                compromise or when a user logs out, invalidate and revoke the
                associated refresh token.
              </li>
            </ul>
            <p className="font-bold text-[#383838] mt-3">We store token in:</p>
            <ul>
              <li>- Local storage (Not secure)</li>
              <li>
                - Secure Cookie (Not true much secure but better than local
                storage)
              </li>
            </ul>
          </span>
        </p>
        <h2 className="text-color mt-10 text-2xl lg:text-4xl font-bold">
          Q2: Compare SQL and NoSQL databases?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            <p>
              SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
              are two different types of database management systems that have
              distinct characteristics and use cases. Here's a comparison
              between SQL and NoSQL databases:
            </p>
            <p className="font-bold text-[#383838] mt-3">SQL</p>
            1. SQL databases use a relational data model, where data is
            organized into tables with predefined schemas. Relationships between
            tables are established using primary and foreign keys, enforcing
            data integrity. <br /> 2. SQL databases are typically vertically
            scalable, meaning they can handle increased loads by increasing the
            resources (CPU, RAM) of the server they run on. Horizontal scaling
            (scaling across multiple servers) can be achieved with techniques
            like sharding, but it can be more complex. <br /> 3. SQL databases
            have a fixed schema, meaning the structure of the data must be
            defined in advance. Any changes to the schema require altering the
            table structure and potentially migrating existing data. 4. <br />{" "}
            SQL databases utilize the SQL language, a standardized query
            language for interacting with relational databases. SQL provides
            powerful querying capabilities, supporting complex joins,
            aggregations, and filtering operations. <br /> 5. SQL databases
            excel in structured data scenarios with complex relationships, such
            as financial systems, e-commerce platforms, and content management
            systems, where data integrity and consistency are crucial.
            <p className="font-bold text-[#383838] mt-3">No-SQL</p>
            1. NoSQL databases employ various data models, such as key-value,
            document, columnar, or graph. They provide flexibility by allowing
            schema-less data storage, which means each record can have a
            different structure. <br /> 2. NoSQL databases are designed to be
            horizontally scalable. They distribute data across multiple servers,
            making it easier to handle large amounts of data and high traffic
            loads. Scaling can be accomplished by adding more servers to the
            cluster. <br /> 3. NoSQL databases offer schema flexibility,
            allowing for dynamic and evolving data structures. The schema can be
            adjusted without requiring modifications to the existing data,
            making it suitable for agile and rapidly changing applications.{" "}
            <br /> 4. NoSQL databases may have their own query languages
            specific to their data model. Some NoSQL databases also support
            SQL-like querying, but with limited functionality compared to SQL
            databases. <br /> 5. NoSQL databases are well-suited for scenarios
            that involve unstructured, semi-structured, or rapidly evolving
            data, such as real-time analytics, social media applications, IoT
            (Internet of Things), and content caching.
          </span>
        </p>
        <h2 className="text-color mt-10 text-2xl lg:text-4xl font-bold">
          Q3: What is express js? What is Nest JS?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            <p className="font-bold text-[#383838] mt-3">Express JS</p>
            Express.js is a popular web application framework for Node.js, a
            JavaScript runtime environment that allows server-side execution of
            JavaScript code. Express.js provides a minimalist and flexible
            approach to building web applications and APIs.
            <p className="font-bold text-[#383838] mt-3">Nest JS</p>
            NestJS is a popular framework for building scalable and maintainable
            server-side applications using TypeScript. It is built on top of
            Node.js and utilizes the concepts of object-oriented programming,
            functional programming, and dependency injection.
          </span>
        </p>
        <h2 className="text-color mt-10 text-2xl lg:text-4xl font-bold">
          Q4: What is MongoDB aggregate and how does it work?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:{" "}
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            The aggregate operation is a powerful tool used for processing and
            analyzing data within a collection. It allows you to perform
            advanced data aggregation tasks, such as grouping, filtering,
            sorting, joining, and transforming data, in a flexible and efficient
            manner. <br />
            The aggregate operation takes an array of stages as input, where
            each stage represents a specific operation or transformation to be
            applied to the data. These stages are processed in sequence, passing
            the resulting dataset from one stage to the next. The output of the
            last stage represents the final result of the aggregation.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
