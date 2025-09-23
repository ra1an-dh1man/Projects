package com.synchUp.SynchUp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker //used for routing messages to the right place
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat")
                .setAllowedOrigins("/http://localhost:8080")
                .withSockJS(); //i used it for making my app compatible for the clients that don't support web socket to make my project more reachable
        }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        /* The simple broker handles broadcasting messages to subscribed clients. */
        registry.enableSimpleBroker("/topic");

        //This defines the prefix for messages sent from clients to the server.
        registry.setApplicationDestinationPrefixes("/app");
    }



}
