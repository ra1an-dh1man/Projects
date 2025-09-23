package com.synchUp.SynchUp.model;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class ChatMessage {
    private long id;
    private String sender;
    private String content;
    private boolean typing;

}
